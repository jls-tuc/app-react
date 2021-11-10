import MockAdapter from 'axios-mock-adapter'
import {UserModel} from '../models/UserModel'
import {
  LOGIN_URL,
  GET_USER_BY_ACCESSTOKEN_URL,
  REGISTER_URL,
  REQUEST_PASSWORD_URL,
} from '../redux/AuthCRUD'
import {UsersTableMock} from './usersTableMock'
