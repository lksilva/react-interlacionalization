import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, withTranslation } from 'react-i18next';


export const MyTransletedComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <p>{t('Welcome.To New Universe')}</p>
      <p>{t('Welcome.To React')}</p>
    </Fragment>
  )
}
// 
class App extends Component {
  state = {
    value: 'pt-BR'
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, () => {
      this.props.i18n.changeLanguage(this.state.value);
      console.log('props ==>>', this.props.i18n);
      console.log('vent.target.value ==>>', this.state.value);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <MyTransletedComponent />

          <label>
            Escolha seu idioma:
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
