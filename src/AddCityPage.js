import React, {PureComponent} from 'react';
import {FlatList,} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import {SearchBar} from "react-native-elements";
import Separator from "./components/Separator";

class AddPost extends PureComponent {

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add City'
        },
        leftButtons: [{
          id: 'cancelBtn',
          text: 'Back'
        }]
      }
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'saveBtn') {
      alert('saveBtn');
    }
  }

  someMethod() {

  }

  someMethod() {

  }

  render() {
    const cities = [
      {name: "Vilnius", id: 'ki', degree: '23', type: 'Heavy Cloud'},
      {name: "Tel Aviv", id: 'tl', isLoading: true},
      {name: "Kiev", id: 'vi', degree: '18', type: 'Snow'},
    ];

    const r = [
      {"title": "San Francisco"},
      {"title": "San Diego"},
      {"title": "San Jose"},
      {"title": "San Antonio"},
      {"title": "Santa Cruz"},
      {"title": "Santiago"},
      {"title": "Santorini"},
      {"title": "Santander"},
      {"title": "Busan"},
      {"title": "Santa Cruz de Tenerife"},
      {"title": "Santa Fe"},
    ];

    return (
      <View style={{backgroundColor: '#F5FCFF', flex: 1}}>
        <SearchBar
          round
          clearIcon={{color: 'grey'}}
          onChangeText={this.someMethod}
          onClear={this.someMethod}
          lightTheme
          placeholder='Start typing name of the city..'/>
        <FlatList
          data={r}
          contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={() => <Separator/>}
          renderItem={({item}) => <Result title={item.title}/>}
        />
      </View>
    );
  }
}

const getHighlightedText = (text, higlight) => {
  let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
  console.log(parts)
  return <Text> {parts.map((part, i) =>
    <Text key={i} style={part.toLowerCase() === higlight.toLowerCase() ? {fontWeight: 'bold'} : {}}>
      {part}
    </Text>)
  } </Text>;
};

const Result = ({title, onPress}) => <TouchableOpacity
  style={{flex: 1, flexDirection: 'row', height: 35, justifyContent: 'space-between', alignItems: 'center'}}>
  <Text style={{fontSize: 16}}>{getHighlightedText(title, 'san')}</Text>
  <Text style={{fontSize: 16, color:'green'}}>✓</Text>
</TouchableOpacity>;

export default AddPost;
