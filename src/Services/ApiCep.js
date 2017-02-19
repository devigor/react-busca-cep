import Axios from 'axios';

const ApiCep = {
  SearchCep(cep) {
    return Axios.get(`https://viacep.com.br/ws/${cep}/json`);
  }
}

export default ApiCep;
