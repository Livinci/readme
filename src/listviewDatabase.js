import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  ToolbarAndroid
} from 'react-native';

class ListViewDatabase extends Component{

        constructor(props) {
            super(props);
            const dataSource = new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            });
            this.state = {
                dataSource: dataSource.cloneWithRows([
                    { name: 'Sleep' }, { name: 'Eat' }, { name: 'Code' },
                    { name: 'Sleep' }, { name: 'Eat' }, { name: 'Code' },
                    { name: 'Sleep' }, { name: 'Eat' }, { name: 'Code' },
                    { name: 'Sleep' }, { name: 'Eat' }, { name: 'Code' }])
            };
        }

        renderItem(task) {
            return (
                <ListItem task={task} />
            );
        }


        render() {
            return (
                <View>
                    <ToolbarAndroid
                        title="Todo List" />
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderItem.bind(this)}/>
                </View>
            );
        }

        componentDidMount(){


        }
}

module.exports= listviewDatabase