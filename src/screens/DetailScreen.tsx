import React from "react";
import { View, Text, StyleSheet, FlatList, Linking } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { showRedirectError } from "../utils/display_utils";
export default class DetailScreen extends React.Component<Props> {
  onHandlePress = () => {

    const { url } = this.props.route.params.article

    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            showRedirectError("URL is invalid");
        }
        return false
    });

  };

  render() {
    return (
      <View style={styles.container}>
        <ArticleCard
          data={this.props.route.params.article}
          onPressTitle={this.onHandlePress}
          asList={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
