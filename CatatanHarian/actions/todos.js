import axios from 'axios';

import {API_URL} from '../config';

export function allTodos(){
  return {
    type: 'ALL_TODOS',
    payload: axios.get(`${API_URL}/todos`)
  }
}
