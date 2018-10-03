import React, {PureComponent} from 'react';
import {View, Text, TextInput} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';

class AddPost extends PureComponent {

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post'
        },
        rightButtons: [{
          id: 'saveBtn',
          text: 'Save',
          enabled: false
        }],
        leftButtons: [{
          id: 'cancelBtn',
          text: 'Cancel'
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

  onChangeText(text) {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [{
          id: 'saveBtn',
          text: 'Save',
          enabled: !!text
        }]
      }
    });
  }

  render() {
    return (
      <View flex center bg-green60>
        <TextInput
          placeholder="Start writing to enable the save btn"
          onChangeText={this.onChangeText}
          hideUnderline
        />
      </View>
    );
  }
}

export default AddPost;
