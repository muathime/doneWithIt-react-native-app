import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListSeperator from '../components/ListSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: "Antony Munyao",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: require("../images/antony.jpg"),
  },
  {
    id: 2,
    title: "Antony Muathime",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: require("../images/antony.jpg"),
  },
];
function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  }
  
    return (
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.avatar}
            onpress={() => console.log("selected message", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onpress={() => handleDelete(item)} />
            )}
            renderLeftActions={() => (
              <ListItemDeleteAction onpress={() => console.log(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListSeperator}
        refreshing = {refreshing}
        onRefresh ={()=> {
        setMessages([
          {
            id: 3,
            title: "3rd Message title goes here",
            description: "3rd Description goes here",
            avatar: require("../images/antony.jpg"),
          },
          {
            id: 4,
            title: "4th Message title goes here",
            description: "4th Description goes here",
            avatar: require("../images/antony.jpg"),
          },
          {
            id: 5,
            title: "5th Message title goes here",
            description: "5th Description goes here",
            avatar: require("../images/antony.jpg"),
          },
        ]);
        }}
      />
    );
}

export default MessagesScreen;