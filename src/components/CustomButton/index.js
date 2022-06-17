import { View, Text, Button } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { neutral1, primaryPurple4 } from '../../constant/color';

function CustomButton({ title }) {
  return (
    <RectButton
      style={{
        height: 48,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 12,
        backgroundColor: primaryPurple4,
        borderRadius: 12,
        marginTop: 24,
      }}
    >
      <Text style={{
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: neutral1,
        marginLeft: 8,
        textAlignVertical: 'center',
      }}
      >
        {title}
      </Text>
    </RectButton>
  );
}

export default CustomButton;
