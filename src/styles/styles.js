import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#0f172a', // dark header background
    marginBottom: 20,
  },

  headerText: {
    color: '#FFFFFFFF', // warm gold
    fontSize: 20,
    fontWeight: 'bold',
  },

  itemRow: {
    margin: 5,
    flexDirection: 'row',
    maxWidth: 500
  },

  itemName: {
    flex: 1,
  },

  counter: {
    flex: 1,
  },

  button: {
    backgroundColor: '#0d9488',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },

  addZikrButton: {
    backgroundColor: '#0d9488',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 5,
    width: 80,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    margin: 5,
    fontSize: 13,
    width: '40%',
  },

  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
});
