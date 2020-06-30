import {StyleSheet, Dimensions} from 'react-native';
import {Colors,Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
bottomContainer:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: Colors.White,
    flexDirection: 'row',
    padding: Metrics.spacing.huge,
  },
  payBtn:{
    backgroundColor: Colors.Background.ButtonBackground,
    width: 171,
    marginTop: 0,
  }
});

export {styles};