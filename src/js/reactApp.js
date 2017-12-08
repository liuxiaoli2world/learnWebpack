import React from 'react';
import style from '../css/common.css';
import ReactDOM from 'react-dom';
import data from '../data';
import {Header} from './Header';
import 'antd/dist/antd.less'; 
ReactDOM.render(<div><Header>{data.name}</Header></div>,document.getElementById('app'));
