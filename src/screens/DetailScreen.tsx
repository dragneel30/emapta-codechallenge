import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ArticleCard from "../components/ArticleCard";

export default class DetailScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ArticleCard data={this.props.route.params.article} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
