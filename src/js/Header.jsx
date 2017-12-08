import React, { Component } from 'react';
import {Input,List,Avatar} from 'antd';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch('./data.json').then((resp) => {
    //   console.log('fetch return.');
    // });
    const data = require('../data.json');
    if(__DEV__) {
      console.table(data);
    }

    $.each([1,2,3], function(index, item){
      console.log(item);
    })
  }

  render() {
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];
    
    return (
      <div>
        <h1>这是标题{'fsdfsa'}</h1>
        <Input placeholder="fdsafsaf" size="large" value="antd"/>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
        {this.props.children}
      </div>
    );
  }
}