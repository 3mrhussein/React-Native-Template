import { Text, ScrollView, ImageBackground, View } from 'react-native';
import React from 'react';
import { useGlobalContext } from '@/context/Global/GlobalProvider';
import { HomeTopImage } from '@/static';
import { useTranslation } from 'react-i18next';
import HeroBanner from '@/components/molecules/HeroBanner/HeroBanner';
import Badge from '@/components/atoms/Badge/Badge';
import Star from '@/components/atoms/Star/Star';
import RatingBar from '@/components/molecules/RatingBar/RatingBar';

const Home = () => {
  const { t } = useTranslation();
  const { isRTL } = useGlobalContext();
  return (
    <ScrollView>
      <HeroBanner
        title={t('HomeHeroTitle')}
        backgroundImage={HomeTopImage}
        height={250}
        isRTL={isRTL}
      />
      <Badge />
      <Star />
      <RatingBar />
    </ScrollView>
  );
};

export default Home;
