import React from 'react';
import { View } from 'react-native';

import { WebView } from 'react-native-webview';

export default function WvArticle({ data }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <WebView source={{ uri: data.url_job }} />
    </View>
  );
}
