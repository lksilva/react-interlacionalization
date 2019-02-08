import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, withTranslation } from 'react-i18next';


export const MyTransletedComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <p>{t('welcome.universe')}</p>
      <p>{t('welcome.react')}</p>
    </Fragment>
  )
}

class App extends Component {
  state = {
    value: 'pt-BR'
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, () => {
      this.props.i18n.changeLanguage(this.state.value);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <MyTransletedComponent />

          <p>{this.props.t('list.added-users', { count: 1 })}</p>
          <p>{this.props.t('list.added-users', { count: 3 })}</p>

          <p>{this.props.t([`error.${404}`, 'error.unspecific'])}</p>
          <p>{this.props.t([`error.${470}`, 'error.unspecific'])}</p>

          <p>{this.props.t('key', { lib: 'React' })}</p>

          <p>{this.props.t('gender.friend')}</p>
          <p>{this.props.t('gender.friend', { context: 'male' })}</p>
          <p>{this.props.t('gender.friend', { context: 'female' })}</p>

          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="pt-BR">Português</option>
              <option value="en-US">English</option>
            </select>
          </label>

        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
