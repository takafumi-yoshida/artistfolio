module ApplicationHelper
  def default_meta_tags
    {
      site: site.meta_tag.name,
      title: site.meta_tag.title,
      reverse: false,
      charset: 'utf-8',
      description: site.meta_tag.description,
      keywords: 'Art,Artist,Photo,Gallery',
      canonical: request.original_url,
      separator: '|',
      icon: [
        { href: image_url('/favicon.ico') },
      ],
      og: {
        site_name: site.meta_tag.name,
        title: site.meta_tag.title,
        description: site.meta_tag.description, 
        type: 'website',
        url: request.original_url,
        image: image_url('/sample.png'),
        locale: 'ja_JP',
      }
    }
  end
end
