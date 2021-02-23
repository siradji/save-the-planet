import {config} from 'dotenv'
import 'module-alias/register';
import 'newrelic';

config()
import './src/config/dbConnection'
import './src/server';