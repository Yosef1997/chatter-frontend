import React, {Component} from 'react';
import {
  Modal,
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {updateUser, deletePicture} from '../Redux/Action/auth';
// import {REACT_APP_API_URL as API_URL} from '@env';

class index extends Component {
  state = {
    modalVisible: false,
    isLoading: false,
    message: '',
    type: 'danger',
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  addPhotoCamera = () => {
    this.setState({modalVisible: false, isLoading: true});
    launchCamera(
      {
        quality: 0.3,
      },
      async (response) => {
        if (response.didCancel) {
          this.setState({
            isLoading: false,
            message: 'User cancelled upload image',
          });
        } else if (response.errorMessage) {
          this.setState({isLoading: false, message: response.errorMessage});
        } else if (response.fileSize >= 1 * 1024 * 1024) {
          this.setState({isLoading: false, message: 'Image to large'});
        } else {
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          const data = new FormData();
          data.append('picture', dataImage);
          await this.props.updateUser(
            this.props.auth.token,
            this.props.auth.user.id,
            data,
          );
          this.setState({
            isLoading: false,
            message: this.props.auth.message,
            type: 'success',
          });
        }
        setTimeout(() => {
          this.setState({message: '', type: 'danger'});
        }, 2000);
      },
    );
  };
  addPhotoGallery = () => {
    this.setState({modalVisible: false, isLoading: true});
    launchImageLibrary({}, async (response) => {
      if (response.didCancel) {
        this.setState({
          isLoading: false,
          message: 'User cancelled upload image',
        });
      } else if (response.errorMessage) {
        this.setState({isLoading: false, message: response.errorMessage});
      } else if (response.fileSize >= 1 * 1024 * 1024) {
        this.setState({isLoading: false, message: 'Image to large'});
      } else {
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        const data = new FormData();
        data.append('picture', dataImage);
        await this.props.updateUser(
          this.props.auth.token,
          this.props.auth.user.id,
          data,
        );
        this.setState({
          isLoading: false,
          message: this.props.auth.message,
          type: 'success',
        });
      }
      setTimeout(() => {
        this.setState({message: '', type: 'danger'});
      }, 2000);
    });
  };

  deletePicture = async () => {
    await this.props.deletePicture(this.props.auth.token, {
      id: this.props.auth.user.id,
    });
    this.setState({
      modalVisible: false,
      type: 'danger',
      message: 'Image has deleted',
    });
    setTimeout(() => {
      this.setState({message: '', type: 'danger'});
    }, 2000);
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
                onPress={this.deletePicture}>
                <Text style={styles.textStyle}>Delete photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(false)}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Image source={this.props.source} style={styles.cardImg} />
        </TouchableOpacity>
        {this.state.isLoading === true && <ActivityIndicator color="#ff1616" />}
        {this.state.message !== '' && this.state.type === 'danger' ? (
          <Text style={styles.error}>{this.state.message}</Text>
        ) : (
          <Text style={styles.success}>{this.state.message}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg1: {
    backgroundColor: '#d9ecf2',
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
    resizeMode: 'cover',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  error: {
    fontSize: 11,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  success: {
    fontSize: 11,
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser, deletePicture};
export default connect(mapStateToProps, mapDispatchToProps)(index);
