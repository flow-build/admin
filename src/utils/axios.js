import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2co-ecsel-669libzkr7pr-986034389.us-east-1.elb.amazonaws.com:3000',
});

export default instance;
