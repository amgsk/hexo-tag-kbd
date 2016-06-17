# hexo-tag-kbd

## Description

Displays the keycaps in your post/page.
Usage is simple, simply be stated as follows.

![](http://i.imgur.com/e2uXkfR.png)

```
{% kbd Ctrl %}
{% kbd A %}
```

If you want to shortcuts be stated as follows.

![](http://i.imgur.com/g7iLJ82.png)

```
{% kbd Ctrl %} + {% kbd A %}
{% kbd Ctrl %} + {% kbd ALT %} + {% kbd DELETE %}
```

The key symbol is displayed as follows.
* Enter
* Shift
* Command
* Option

## For Examples

#### HHKB

I LOVE HHKB.

![](http://i.imgur.com/55CQUvL.png)


#### Enter
![](http://i.imgur.com/TnXqz7L.png)

#### Shift
![](http://i.imgur.com/Qdlu34b.png)

#### Command
![](http://i.imgur.com/6YT5GxQ.png)

#### Option
![](http://i.imgur.com/ObJ4Dry.png)

## Install

```
npm install hexo-tag-kbd@latest --save
```

## Usage

1. Create post base.
  `hexo new title`
1. Provides a tag in the article.
   See *Description* section.
1. Generate your static post.
  `hexo generate`
1. Open your Browser.
   type `0.0.0.0:4000` or `localhost:4000`

Please see this link for more information. [Hexo Document](https://hexo.io/docs/commands.html)

## Contribute

1. Fork it ( https://github.com/kamiya555/hexo-tag-kbd )
1. Create your feature branch (git checkout -b my-new-feature)
1. Commit your changes (git commit -am 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create new Pull Request


