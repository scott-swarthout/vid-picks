this.AdminConfig = {
  name: " VidPicks",
adminEmails: ['	john@example.com'],
collections:
{
Reviews: {
  icon: 'comment',
  tableColumns: [
    {label: 'Title', name: 'title'},
      {label: 'Published', name: 'createdAt'},
      {label: "Video", name:'url'},
      {label: 'Author', name: 'author.emails[0].address'}
  ]
},
Videos: {
  icon: "video-camera",
  tableColumns: [
    {label: 'Title', name: 'title'},
      {label: 'Published', name: 'createdAt'},
      {label: "URL", name:'url'},
  ]
},

}
};
