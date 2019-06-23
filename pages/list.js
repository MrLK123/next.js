import React,{Component} from 'react';
import '../styles/list.css';
import Layout from './../components/Layout.js';
export default class List extends Component{
    state={
        list:["hello","world","How are you?","I am fun","thanks"]
    }
    render(){
        return (
            <Layout>
                <ul>
                    {this.state.list.map(item=>(
                        <li>{item}</li>
                    ))}
                </ul>
            </Layout>
            
        )
    }
}