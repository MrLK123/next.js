import React,{Component} from 'react';
import axios from 'axios';

export default class Films extends Component{
    static async getInitialProps(){
        const res=await axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8475273',{
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        console.log(res);
        return {
            films:res.data.data.films
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.films.map(item=>(
                        <li key={item.id}>{item.name}
                            <img src={item.poster} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}