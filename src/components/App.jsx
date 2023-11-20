import Header from './Header/Header';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import { skills } from '../data/skills.js';
import stats from '../data/stats.json';
import { prices } from '../data/price';
import About from './About/About';
import Price from './Price/Price';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';
import { Component } from 'react';
// import ModalForm from './ModalForm/ModalForm';
import SearchForm from './SearchForm/SearchForm';
import { Weather } from './Weather/Weather';
import ModalFormik from './ModalForm/ModalFormik';

export class App extends Component {
  state = {
    searchQuery: '',
    isModalShow: false,
    isShowForm: false,
  };

  openModal = () => {
    this.setState({ isModalShow: true });
  };

  closeModal = () => {
    this.setState({ isModalShow: false });
  };

  sendForm = data => {
    console.log(data);
  };

  sendWeather = data => {
    this.setState({ searchQuery: data, isShowForm: false });
  };
  render() {
    const { isModalShow } = this.state;

    return (
      <>
        <Header openModal={this.openModal} />
        {isModalShow && (
          <Modal closeModal={this.closeModal}>
            <h3>This is modal window</h3>
            {/* <ModalForm closeModal={this.closeModal} sendForm={this.sendForm} /> */}
            <ModalFormik
              closeModal={this.closeModal}
              sendForm={this.sendForm}
            />
          </Modal>
        )}
        <main>
          {this.state.isShowForm && <SearchForm onSubmit={this.sendWeather} />}
          <Weather
            query={this.state.searchQuery}
            toShowForm={() => this.setState({ isShowForm: true })}
          />
          <Hero openModal={this.openModal} />
          <Skills title="Skills" data={skills} />
          <About stats={stats} />
          <Price prices={prices} />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}
