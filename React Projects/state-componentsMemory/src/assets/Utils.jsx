export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/gallary' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  