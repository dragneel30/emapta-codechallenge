import React, { FC } from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { toUserFriendlyDate } from "../utils/date_utils";

const ArticleCard: FC<ArticleCardData> = (props) => {
  const {
    data: { urlToImage, title, author, description, publishedAt },
    onPress,
  } = props;

  return (
    <Card elevation={8} style={styles.container} onPress={onPress}>
      <Card.Content style={styles.body}>
        {urlToImage ? (
          <Image style={styles.image} source={{ uri: urlToImage }} />
        ) : (
          <></>
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{toUserFriendlyDate(publishedAt)}</Text>
        </View>
        <Text>{description}</Text>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  body: {
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: 120,
  },
  title: {
    fontWeight: "bold",
  },
  author: {
    flex: 1,
    fontWeight: "bold",
  },
  date: {
    flex: 1,
  },
});
