import { ApplicationProvider, Button, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native';
import * as eva from '@eva-design/eva';
import { default as theme } from './style/theme.json'

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <SafeAreaView>
      <Button>Home</Button>
    </SafeAreaView>
  </Layout>
);

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme}}>
        <HomeScreen />
      </ApplicationProvider>
    </>
  );
};
