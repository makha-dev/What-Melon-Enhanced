export default class Trie {
  constructor(words) {
    this.root = {};
    words.forEach((word) => {
      this.insert(word);
    });
  }

  insert = (word) => {
    let current = this.root;
    word.split("").forEach((letter) => {
      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    });
    current.isEnd = true;
  };

  search = (word) => {
    let found = true;
    let current = this.root;
    word.split("").forEach((letter) => {
      if (!current[letter]) {
        found = false;
        return;
      }
      current = current[letter];
    });
    return found;
  };

  startsWith = (prefix) => {
    let current = this.root;
    prefix.split("").forEach((letter) => {
      current = current[letter];
    });
    return current;
  };

  getMatches = (prefix) => {
    if (!this.search(prefix)) return [];

    let words = [];
    let current = this.startsWith(prefix);
    const extractWords = (root, s = "", limit = 5) => {
      if (words.length >= limit) return;
      if (root.isEnd) {
        words.push(s);
        return;
      }
      Object.keys(root).forEach((letter) => {
        extractWords(root[letter], s + letter, limit);
      });
    };
    extractWords(current);
    return words;
  };
}

// let trie = new Trie();
// trie.insert("hello");
// trie.insert("hey");
// trie.insert("hi");
// trie.insert("hem");

// console.log(trie.getMatches("hello"));
