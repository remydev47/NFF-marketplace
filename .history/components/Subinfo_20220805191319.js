import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, assets, SHADOWS } from '../constants'

export const NFTtitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return(
    <View>
      <Text
       style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
      }}
      >
        {title}
       </Text>
       <Text
       style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
      }}
      >
        {subTitle}
       </Text>
    </View>
  )
}

export const EthPrice = ({price}) => {
    return (
      <View
       style={{
        flexDirection: "row",
        alignItems: "center"
       }}
      >
        <Image 
          source={assets.eth}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            marginRight: 2
          }}
        />
      </View>
    )
  }

  export const ImagCmp = ({imgUrl, index}) => {
    return (
      <Image
        source={imgUrl} 
        resizeMode="contain"
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
  }

  export const People = () => {
    return (
      <View style={{flexDirection: "row"}}>
        {[assets.person01, assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <ImagCmp 
             imgUrl={imgUrl}
             index={index}
             key={`People-${index}`}
            />
        ))}
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          ...SHADOWS.light,
          elevation: 1,
          maxWidth: "50%"
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary
          }}
        >
          Ending In
        </Text>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
          }}
        >
          12hr 30min
        </Text>
      </View>
    )
  }
 
  export const Subinfo = () => {
    return (
      <View
        style={{
            width: "100%",
            paddingHorizontal: -SIZES.font,
            marginTop: SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
      >
        <People />
        <EndDate />
      </View>
    )
  }