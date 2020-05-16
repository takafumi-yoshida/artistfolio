module ApplicationHelper
  def default_meta_tags
    {
      site: 'Artistfolio',
      title: 'アーティストフォリオ',
      reverse: true,
      charset: 'utf-8',
      description: 'Art（只今、写真のみ）の投稿、閲覧サービス。写真集を作ることもでき、スライドショーで楽しむことができます。また、ポートフォリオとしてもお使いいただけます。',
      keywords: 'Art,Artist,Photo,Gallery',
      canonical: request.original_url,
      separator: '|',
      icon: [
        { href: image_url('/favicon.ico') },
      ],
      og: {
        site_name: 'Artistfolio',
        title: 'アーティストフォリオ',
        description: 'Art（只今、写真のみ）の投稿、閲覧サービス。写真集を作ることもでき、スライドショーで楽しむことができます。また、ポートフォリオとしてもお使いいただけます。', 
        type: 'website',
        url: request.original_url,
        image: image_url('/sample.png'),
        locale: 'ja_JP',
      }
    }
  end
end
