import {Dimensions,StyleSheet} from 'react-native'
import COLORS from '../../../consts/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const STYLES = StyleSheet.create({
    mainView:{
        width: width,
        height: height * 0.30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer:{
        flexDirection: 'row',
            alignItems: 'center',
            marginTop: 120,
            justifyContent: 'center',

    },
    counterImage:{
        width: 200,
              height:200,
              resizeMode: 'contain',
    },
    counterText:{
        marginHorizontal: 10,
              fontFamily: 'Sora-Bold',
              fontSize: 40,
              fontWeight: '900',
              color: COLORS.primary,
    },
    phoneBkg:{
        width: '100%',
          height: height * 0.66,
          resizeMode: 'contain',
    },
    phoneContainer:{
        flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
            width: '86%',
            // backgroundColor: 'pink',
            height: height * 0.14,
            alignSelf: 'center',
    },
    phoneHeader:{
        flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
    },
    phoneHeaderItem:{
        width: '25%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneHeaderItemButton:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneHeaderItemImage:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    phoneHeaderItemText:{
        marginTop: '13%',
        fontFamily: 'Sora-Bold',
        fontSize: 17,
        fontWeight: '500',
    },
})

export default STYLES; 