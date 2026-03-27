import { View, Text } from 'react-native'
import React from 'react'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import Reuse_touchbutton from '../../component/Reuse_touchbutton';
import styles from './styles';

export default function Setting() {
    const handleLeftPress = () => {
        // Handle left button press
    };
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Reuse_Header
                    title="Setting"
                    leftIcon="arrow-back"
                    color={'red'}
                    onLeftPress={handleLeftPress}
                />
            </View>

            <Reuse_touchbutton margintop={10} label={'Account Information'} textstyles={styles.fontstyles} rightIcon={'right'} />
            <View style={styles.text_view} />

            <Reuse_touchbutton margintop={10} label={'Payment Information'} textstyles={styles.fontstyles} rightIcon={'right'} />
            <View style={styles.text_view} />

            <Reuse_touchbutton margintop={10} label={'Region / Country'} textstyles={styles.fontstyles} rightIcon={'right'} />
            <View style={styles.text_view} />

            <Reuse_touchbutton margintop={10} label={'Help / FAQ'} textstyles={styles.fontstyles} rightIcon={'right'} />
            <View style={styles.text_view} />

            <Reuse_touchbutton margintop={10} label={'Terms of use'} textstyles={styles.fontstyles} rightIcon={'right'} />
            <View style={styles.text_view} />

            <Reuse_touchbutton margintop={10} label={'Shopping preferences'} textstyles={styles.fontstyles} rightIcon={'right'} />
            <View style={styles.text_view} />

            <Reuse_touchbutton margintop={10} label={'History'} textstyles={styles.fontstyles} rightIcon={'right'} />

            {/* </View> */}
        </View >
    )
}