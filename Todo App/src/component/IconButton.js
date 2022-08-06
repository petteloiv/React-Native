import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import images from '../../images';

const IconButtons = ( { type }) => {
  return ( 
    <TouchableOpacity style={styles.iconbutton}>
      <Image source={type}/>
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

export default IconButtons;