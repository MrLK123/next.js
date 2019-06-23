import React,{Component} from 'react';

export default class NestStyle extends Component{
    render(){
        return (
            <div>
                <style jsx>{`
                    h1{
                        background:blue;
                    }
                `}</style>
                <h1>Hello world</h1>
            </div>
        )
    }
}