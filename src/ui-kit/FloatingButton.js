import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'theme/Colors';
import images from 'assets/images';
import PropTypes from 'prop-types';

function FloatingButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onToggle}>
      <Image
        source={props.displayGrid ? images.grid : images.list}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

FloatingButton.propTypes = {
  onToggle: PropTypes.func,
  displayGrid: PropTypes.bool,
};

FloatingButton.defaultProps = {
  onToggle: () => {},
  displayGrid: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    zIndex: 1,
    backgroundColor: Colors.btnPrimary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
    tintColor: Colors.white,
  },
});
export default FloatingButton;
