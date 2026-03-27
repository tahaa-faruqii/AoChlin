import { View, Text } from 'react-native'
import React from 'react'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
export default function Help() {
    const handleLeftPress = () => {

    }
    return (
        <View>
            <View>
                <Reuse_Header
                    title="History"
                    leftIcon="arrow-back"
                    color={'red'}
                    onLeftPress={handleLeftPress}
                    style={{ backgroundColor: '#F1F1F1' }}
                    iconstyle={{ backgroundColor: '#fff', borderRadius: 30, paddingLeft: 10 }}
                />
            </View>
            <View style={{ justifyContent: "center", alignSelf: 'center', width: '90%' }}>
                <Collapse>
                    <CollapseHeader style={{ height: 50, borderWidth: 1 }}>
                        <View>
                            <Text style={{ fontSize: 16, marginLeft: '5%', marginTop: '4%', fontWeight: 'bold' }}>Need Help</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Ta daa!</Text>
                    </CollapseBody>
                </Collapse>
                <Collapse style={{ paddingTop: 10 }}>
                    <CollapseHeader style={{ height: 50, borderWidth: 1, paddingTop: 10, }}>
                        <View>
                            <Text style={{ fontSize: 16, marginLeft: '5%', fontWeight: 'bold' }}>AoChlin Related questions:</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={{ paddingTop: 10, }}>
                        <Text style={{ borderWidth: 1, padding: 10 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
                    </CollapseBody>
                </Collapse>
                <Collapse style={{ paddingTop: 10 }}>
                    <CollapseHeader style={{ height: 50, borderWidth: 1, paddingTop: 10, }}>
                        <View>
                            <Text style={{ fontSize: 16, marginLeft: '5%', fontWeight: 'bold' }}>System related questions:</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={{ paddingTop: 10, }}>
                        <Text style={{ borderWidth: 1, padding: 10 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
                    </CollapseBody>
                </Collapse>
                <Collapse style={{ paddingTop: 10 }}>
                    <CollapseHeader style={{ height: 50, borderWidth: 1, paddingTop: 10, }}>
                        <View>
                            <Text style={{ fontSize: 16, marginLeft: '5%', fontWeight: 'bold' }}>Support Related questions: </Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={{ paddingTop: 10, }}>
                        <Text style={{ borderWidth: 1, padding: 10 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
                    </CollapseBody>
                </Collapse>
            </View>
        </View>
    )
}