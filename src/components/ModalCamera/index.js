import React, {Component} from 'react';
import {
  Modal,
  StyleSheet,
  Alert,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import ProfilImg from '../../assets/F9.jpg';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';
import {REACT_APP_API_URL as API_URL} from '@env';

class index extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  addPhotoCamera = () => {
    this.setState({modalVisible: false});
    launchCamera(
      {
        quality: 0.3,
      },
      async (response) => {
        if (response.didCancel) {
          Alert('User cancelled upload image');
        } else if (response.errorMessage) {
          Alert('Image Error: ', response.errorMessage);
        } else if (response.fileSize >= 1 * 1024 * 1024) {
          Alert('Image to large');
        } else {
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          await this.props.updateUser(
            this.props.auth.token,
            this.props.auth.user.id,
            {file: dataImage},
          );
          Alert(this.props.auth.message, 'success');
        }
      },
    );
  };
  addPhotoGallery = () => {
    this.setState({modalVisible: false});
    launchImageLibrary({}, async (response) => {
      if (response.didCancel) {
        Alert('User cancelled upload image');
      } else if (response.errorMessage) {
        Alert('Image Error: ', response.errorMessage);
      } else if (response.fileSize >= 1 * 1024 * 1024) {
        Alert('Image to large');
      } else {
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        await this.props.updateUser(
          this.props.auth.token,
          this.props.auth.user.id,
          {file: dataImage},
        );
        Alert(this.props.auth.message, 'success');
      }
    });
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.bg1}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={this.addPhotoCamera}>
                <Text style={styles.text2Style}>Open camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={this.addPhotoGallery}>
                <Text style={styles.text2Style}>Open gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Delete photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          {this.props.auth.detailUser.picture &&
          this.props.auth.detailUser.picture !== 'null' ? (
            <Image
              source={{
                uri: API_URL.concat(
                  `/upload/profile/${this.props.auth.detailUser.picture}`,
                ),
              }}
              style={styles.cardImg}
            />
          ) : (
            <Image source={ProfilImg} style={styles.cardImg} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg1: {
    backgroundColor: '#e6e4df',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 12,
  },
  cardImg: {
    height: 150,
    width: 150,
    borderRadius: 150,
    opacity: 1,
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: '#ff1616',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2Style: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(index);
