import React from "react";
import { View, FlatList, StyleSheet, Text, RefreshControl } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { getCurrentDayArticles, API_RESULT } from "../apis/APICommonService";

export default class HomeScreen extends React.Component<Props> {
  state = {
    articles: [],
    refreshing: true
  };

  async componentDidMount() {
    await this.initList()
  }

  initList = async () => {
  
    let articles = await getCurrentDayArticles({
      q: "programming",
    })

    if (articles != API_RESULT.ERROR) {
      console.log('testset')
      this.setState({ articles: articles, refreshing: false });
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
    return <ArticleCard data={item} onPress={this.goToDetails(item)} asList={false} />;
  };

  render() {
    const { articles, refreshing } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={articles}
          renderItem={this.renderItem}
          keyExtractor={this.getKeyExtractor}
          refreshControl={
             <RefreshControl
              refreshing={refreshing}
              onRefresh={this.initList}
             />
           }
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
