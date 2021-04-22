// ===== Button
// import all modules
import React, {Fragment} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Button(props) {
  return (
    <Fragment>
      <TouchableOpacity
        disabled={props.disabled ? true : false}
        style={styles.button(props.disabled)}
        onPress={props.onPress}>
        <Icon style={styles.text(props.disabled)} name="arrowright" size={24} />
      </TouchableOpacity>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  button: function (isDisabled) {
    if (isDisabled) {
      return {
        paddingVertical: 16,
        width: 56,
        backgroundColor: '#DADADA',
        borderRadius: 56,
      };
    } else {
      return {
        paddingVertical: 16,
        width: 56,
        backgroundColor: '#ff1616',
        borderRadius: 56,
      };
    }
  },
  text: function (isDisabled) {
    if (isDisabled) {
      return {
        textAlign: 'center',
        color: '#88888F',
        fontWeight: 'bold',
      };
    } else {
      return {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      };
    }
  },
});
