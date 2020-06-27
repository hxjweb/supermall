import axios from '../../network/request'
export function getHomeMultiData() {
    return axios({
        url: '/home/multidata'
    })
}