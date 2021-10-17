import { Component } from 'react';
import './App.css';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import imageApi from '../../services/image-api';
import MyLoader from '../MyLoader';
import Modal from '../Modal';

class App extends Component {
  state = {
    query: '',
    page: 1,
    searchResults: [],
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages().finally(() => this.setState({ loader: false }));
    }
  }

  fetchImages = () => {
    this.setState({ loader: true });
    return imageApi(this.state.query, this.state.page)
      .then(res => {
        this.setState(prevState => ({
          page: prevState.page + 1,
          searchResults: [...prevState.searchResults, ...res],
        }));
      })
      .catch(err => console.log(err));
  };

  getQuery = value =>
    this.setState({
      query: value,
      page: 1,
      searchResults: [],
    });

  handleButtonLoadMore = () => {
    this.fetchImages()
      .then(() => this.scrollDown())
      .finally(() => this.setState({ loader: false }));
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { loader, searchResults, query } = this.state;
    return (
      <div className="App">
        <Searchbar getQuery={this.getQuery} />
        {/* {loader && <MyLoader/>} */}
        {searchResults.length > 0 ? (
          <ImageGallery searchResults={searchResults} />
        ) : (
          query !== '' && !loader && <p className="noResult">No results😟</p>
        )}
        {searchResults.length > 0 && !loader && (
          <Button handleButtonLoadMore={this.handleButtonLoadMore} />
        )}
        {loader && <MyLoader />}
        <Modal />
      </div>
    );
  }
}

export default App;
