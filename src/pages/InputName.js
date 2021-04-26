import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
// import Logo from '../assets/chatter.png';
import Header from '../components/Header';
import InputCustom from '../components/InputCustom';
import ButtonCircle from '../components/ButtonCircle';
import Icon from 'react-native-vector-icons/EvilIcons';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {dataRegister} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    isLoading: false,
    isMessage: false,
    modalVisible: false,
    message: '',
    type: 'danger',
  };

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  addPhotoCamera = () => {
    this.setState({loading: true, modalVisible: false});
    launchCamera(
      {
        quality: 0.3,
      },
      async (response) => {
        if (response.didCancel) {
          this.setState({
            loading: false,
            message: 'User cancelled upload image',
          });
        } else if (response.errorMessage) {
          this.setState({
            loading: false,
            message: `Image Error: ${response.errorMessage}`,
          });
        } else if (response.fileSize >= 1 * 1024 * 1024) {
          this.setState({loading: false, message: 'Image to large'});
        } else {
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          await this.props.dataRegister({
            picture: dataImage,
          });
          this.setState({
            loading: false,
            type: 'success',
            message: 'Image has change',
          });
        }
        setTimeout(() => {
          this.setState({message: '', type: 'danger'});
        }, 2000);
      },
    );
  };
  addPhotoGallery = () => {
    this.setState({loading: true, modalVisible: false});
    launchImageLibrary({}, async (response) => {
      if (response.didCancel) {
        this.setState({
          loading: false,
          message: 'User cancelled upload image',
        });
      } else if (response.errorMessage) {
        this.setState({
          loading: false,
          message: `Image Error: ${response.errorMessage}`,
        });
      } else if (response.fileSize >= 1 * 1024 * 1024) {
        this.setState({loading: false, message: 'Image to large'});
      } else {
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        await this.props.dataRegister({
          picture: dataImage,
        });
        this.setState({loading: false, message: 'Image has change'});
      }
      setTimeout(() => {
        this.setState({message: '', type: 'danger'});
      }, 2000);
    });
  };

  nameValidation(values) {
    const errors = {};
    const {name} = values;
    if (!name) {
      errors.msg = 'Name required';
    } else if (name.length < 3) {
      errors.msg = 'Name should have three characters';
    }
    return errors;
  }

  doLogin = async (values) => {
    this.setState({isLoading: true});
    await this.props.dataRegister({name: values.name});
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 2000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);
    this.props.navigation.navigate('InputPassword');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header back="chevron-back" size3={25} cardText={styles.cardText} />
        <Text style={styles.title}>Create new account</Text>
        <Text style={styles.subTitle}>
          Other Chatter's user can see your name and profile
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonLink]}
                onPress={() => this.addPhotoCamera()}>
                <Text style={styles.textStyle}>Camera</Text>
              </TouchableOpacity>
              <View style={styles.gap} />
              <TouchableOpacity
                style={[styles.button, styles.buttonLink]}
                onPress={() => this.addPhotoGallery()}>
                <Text style={styles.textStyle}>Gallery</Text>
              </TouchableOpacity>
              <View style={styles.gap} />
              <TouchableOpacity
                style={[styles.button, styles.buttonDelete]}
                onPress={() => this.deletePicture()}>
                <Text style={styles.textStyle}>Delete Photo Profile</Text>
              </TouchableOpacity>
              <View style={styles.gap} />
              <TouchableOpacity
                style={[styles.button, styles.buttonDelete]}
                onPress={() => this.setModalVisible(false)}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => this.setModalVisible(true)}
          style={styles.cameraForm}>
          <Icon name="camera" size={50} />
        </TouchableOpacity>
        <Formik
          initialValues={{name: ''}}
          validate={(values) => this.nameValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doLogin(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <InputCustom
                container={styles.inputForm}
                placeholder="Full name"
                inputStyle={styles.inputStyle}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {errors.msg ? (
                <Text style={styles.textError}>{errors.msg}</Text>
              ) : null}

              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.name === '' ? (
                    <ButtonCircle disabled={true} onPress={handleSubmit} />
                  ) : (
                    <ButtonCircle disabled={false} onPress={handleSubmit} />
                  )}
                </View>
              )}
            </>
          )}
        </Formik>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backImgage: {
    backgroundColor: '#d9ecf2',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cameraForm: {
    borderWidth: 0.5,
    width: 100,
    height: 100,
    borderRadius: 100,
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginTop: 16,
    marginLeft: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    paddingHorizontal: 16,
  },
  btnForm: {
    paddingHorizontal: 16,
    marginTop: 50,
    alignItems: 'flex-end',
  },
  inputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 16,
    flex: 1,
    marginTop: 30,
  },
  inputForm: {
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonLink: {
    backgroundColor: '#5F2EEA',
  },
  buttonDelete: {
    backgroundColor: 'red',
  },
  gap: {
    height: 24,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textError: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  // textsuccess: {
  //   fontSize: 14,
  //   color: '#00D16C',
  //   textAlign: 'center',
  //   marginTop: 10,
  // },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {dataRegister};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
