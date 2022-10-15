/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const renderPosts = ({item, index}: {item: any; index: number}) => {
    return (
      <Text key={`item-${index}`}>
        {index + 1} - {item.title}
      </Text>
    );
  };
  console.log(users, 'users');
  return (
    <SafeAreaView>
      <View style={styles.parentForHeader}>
        <View style={styles.headerSection}>
          <View style={styles.headerItem}>
            {!users.length ? (
              <Button
                title={'Get users'}
                onPress={() => {
                  fetch('https://jsonplaceholder.typicode.com/users')
                    .then(resp => resp.json())
                    .then(json => setUsers(json));
                }}
              />
            ) : (
              <Button
                title="Hide users"
                onPress={() => {
                  setUsers([]);
                }}
              />
            )}
          </View>
          {!!users.length && <Text style={styles.title}>Users</Text>}
        </View>
        {!!users.length &&
          users.map((item, index) => {
            return (
              <Text key={`item-${index}`}>
                {item.name} --- {item.username}
              </Text>
            );
          })}
      </View>
      <View>
        <View style={styles.parentForHeader}>
          <View style={styles.headerSection}>
            <View style={styles.headerItem}>
              {!posts.length ? (
                <Button
                  title={'Get Posts'}
                  onPress={() => {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                      .then(resp => resp.json())
                      .then(json => setPosts(json));
                  }}
                />
              ) : (
                <Button
                  title="Hide Posts"
                  onPress={() => {
                    setPosts([]);
                  }}
                />
              )}
            </View>
            {!!posts.length && <Text style={styles.title}>Posts</Text>}
          </View>
          <View style={styles.flatList}>
            {!!posts.length && (
              <FlatList data={posts} renderItem={renderPosts} />
            )}
          </View>
        </View>
        {!!users.length && !!posts.length && (
          <View style={styles.bottomButtonBlock}>
            <TouchableOpacity
              style={styles.buttonBlock}
              onLongPress={() => {
                setPosts([]);
                setUsers([]);
              }}>
              <Text style={styles.buttonText}>Hide all</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentForHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  headerSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerItem: {width: '40%', alignItems: 'flex-start'},
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  flatList: {
    height: 400,
  },
  bottomButtonBlock: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  buttonBlock: {
    alignItems: 'center',
    paddingTop: 20,
    padding: 20,
    backgroundColor: '#64A6FA',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
});

export default App;
