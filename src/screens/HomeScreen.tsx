import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { getCurrentDayArticles, API_RESULT } from "../apis/APICommonService";

export default class HomeScreen extends React.Component<Props> {
  state = {
    articles: [],
  };

  async componentDidMount() {
    let articles = await getCurrentDayArticles({
      q: "programming",
    });
    if (articles != API_RESULT.ERROR) {
      this.setState({ articles: articles });
    }
  }

  goToDetails = (article) => {
    return () => {
      this.props.navigation.navigate("Details", { article });
    };
  };

  getKeyExtractor = (item, index) =>
    // id is not unique in the API
    index.toString();

  renderItem = ({ item, index }) => {
    return <ArticleCard data={item} onPress={this.goToDetails(item)} />;
  };

  render() {
    const { articles } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={articles}
          renderItem={this.renderItem}
          keyExtractor={this.getKeyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
