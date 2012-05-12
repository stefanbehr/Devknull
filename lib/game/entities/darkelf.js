


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Devknull/lib/game/entities/darkelf.js at master · stefanbehr/Devknull</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="4Ae1OBnp7hx5MJ3+PIZO40VbWE3+TKx5GKuMTDooFk4=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-5494b118506d6fd5cb1eec0473e9944533b81e9d.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-c1921b914a1a5c9fd63f1f197c5742bcc5500740.css" media="screen" rel="stylesheet" type="text/css" />
    
    
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/frameworks-31b6b84bca1e7d3f3907f63a4dd7f9bbda3a0eda.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-9892ca69b1d6743cc42c1db653e5102a152511ad.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/stefanbehr/Devknull/blob/130f668ba2f00faa25fe0b356ce8b4dcb44be61d/lib/game/entities/darkelf.js'>
    <meta property="og:title" content="Devknull"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/stefanbehr/Devknull"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275859"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Devknull hosted on GitHub"/>

    <meta name="description" content="Devknull hosted on GitHub" />

  <link href="https://github.com/stefanbehr/Devknull/commits/master.atom?login=hsc&token=e9c1c69310bb8ce4d2e9124324295311" rel="alternate" title="Recent Commits to Devknull:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-private env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882717" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325376" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1323882717" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1324325376" />
          </a>

              
    <div class="topsearch ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>
      
      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/hsc"><img height="20" src="https://secure.gravatar.com/avatar/c830cddc50dd436fca02a7289cef5fba?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/hsc" class="name">hsc</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon create"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon notifications"></span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="mini-icon account-settings"></span></a></li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out"><span class="mini-icon logout"></span></a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">


              <li class="nspr">
                <a href="/stefanbehr/Devknull/pull/new/master" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a>
              </li>

          <li class="js-toggler-container watch-button-container ">
            <a href="/stefanbehr/Devknull/toggle_watch" class="minibutton btn-i-type-i-switcher switcher count btn-watches js-toggler-target watch-button lighter" data-remote="true" data-method="post" rel="nofollow"><span><span class="icon"></span><i class="js-watcher-count">1</i> Watch</span></a>
            <a href="/stefanbehr/Devknull/toggle_watch" class="minibutton btn-i-type-i-switcher switcher count btn-unfollows js-toggler-target unwatch-button lighter" data-remote="true" data-method="post" rel="nofollow"><span><span class="icon"></span><i class="js-watcher-count">1</i> Unwatch</span></a>
          </li>

              <li><a href="/stefanbehr/Devknull/fork" class="minibutton btn-i-type-i-switcher switcher count btn-forks js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span><span class="icon"></span><i>1</i> Fork</span></a>
              </li>


    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title">
            <span class="repo-label"><span class="private">private</span></span>
            <span class="mega-icon private-repo"></span>
            <span class="author vcard">
<a href="/stefanbehr" class="url fn" itemprop="url" rel="author">              <span itemprop="title">stefanbehr</span>
              </a></span> /
            <strong><a href="/stefanbehr/Devknull" class="js-current-repository">Devknull</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/stefanbehr/Devknull" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/stefanbehr/Devknull/network" highlight="repo_network">Network</a>
    <li><a href="/stefanbehr/Devknull/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/stefanbehr/Devknull/issues" highlight="repo_issues">Issues <span class='counter'>0</span></a></li>

      <li><a href="/stefanbehr/Devknull/wiki" highlight="repo_wiki">Wiki <span class='counter'>0</span></a></li>

    <li><a href="/stefanbehr/Devknull/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/stefanbehr/Devknull/tree-list/130f668ba2f00faa25fe0b356ce8b4dcb44be61d"
      data-blob-url-prefix="/stefanbehr/Devknull/blob/130f668ba2f00faa25fe0b356ce8b4dcb44be61d"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/stefanbehr/Devknull">Devknull</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/stefanbehr/Devknull/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/stefanbehr/Devknull/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/stefanbehr/Devknull/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  <li class="search repo-search ">
<form accept-charset="UTF-8" action="/stefanbehr/Devknull/search" method="get">      <span class="fieldwrap">
        <input type="text" name="q" value=""
          placeholder="Search source code&hellip;" /><button type="submit" class="minibutton"><span class="mini-icon search-input"></span></button>
      </span>
      <input type="hidden" id="lang-value" name="langOverride" value="" />
      <input type="hidden" id="start-value" name="start" value="" />
</form>  </li>

  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon remove-close"></span></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/stefanbehr/Devknull/blob/master/lib/game/entities/darkelf.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/stefanbehr/Devknull" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/stefanbehr/Devknull/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/stefanbehr/Devknull/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views8/v8/blob:v21:a8f8c88f68213fc73ef78a40d125dbfb -->
  <div id="slider">

    <div class="breadcrumb" data-path="lib/game/entities/darkelf.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stefanbehr/Devknull/tree/130f668ba2f00faa25fe0b356ce8b4dcb44be61d" class="js-rewrite-sha" itemprop="url"><span itemprop="title">Devknull</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stefanbehr/Devknull/tree/130f668ba2f00faa25fe0b356ce8b4dcb44be61d/lib" class="js-rewrite-sha" itemscope="url"><span itemprop="title">lib</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stefanbehr/Devknull/tree/130f668ba2f00faa25fe0b356ce8b4dcb44be61d/lib/game" class="js-rewrite-sha" itemscope="url"><span itemprop="title">game</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stefanbehr/Devknull/tree/130f668ba2f00faa25fe0b356ce8b4dcb44be61d/lib/game/entities" class="js-rewrite-sha" itemscope="url"><span itemprop="title">entities</span></a></span> / <strong class="final-path">darkelf.js</strong> <span class="js-clippy mini-icon clippy " data-clipboard-text="lib/game/entities/darkelf.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="lib/game/entities/darkelf.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/32fcd5b11ea094503c90e941028aff60?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/stefanbehr">stefanbehr</a></span>
        <time class="js-relative-date" datetime="2012-05-12T11:06:39-07:00" title="2012-05-12 11:06:39">May 12, 2012</time>
        <div class="commit-title">
            <a href="/stefanbehr/Devknull/commit/130f668ba2f00faa25fe0b356ce8b4dcb44be61d" class="message">entity damage timing done</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
              <a class="avatar tooltipped downwards" title="stefanbehr" href="/stefanbehr/Devknull/commits/master/lib/game/entities/darkelf.js?author=stefanbehr"><img height="20" src="https://secure.gravatar.com/avatar/32fcd5b11ea094503c90e941028aff60?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="hsc" href="/stefanbehr/Devknull/commits/master/lib/game/entities/darkelf.js?author=hsc"><img height="20" src="https://secure.gravatar.com/avatar/c830cddc50dd436fca02a7289cef5fba?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/32fcd5b11ea094503c90e941028aff60?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/stefanbehr">stefanbehr</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/c830cddc50dd436fca02a7289cef5fba?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/hsc">hsc</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="lib/game/entities/darkelf.js/" data-permalink-url="/stefanbehr/Devknull/blob/130f668ba2f00faa25fe0b356ce8b4dcb44be61d/lib/game/entities/darkelf.js" data-title="Devknull/lib/game/entities/darkelf.js at master · stefanbehr/Devknull · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon text-file"></b></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>385 lines (373 sloc)</span>
                <span>12.007 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/stefanbehr/Devknull/edit/130f668ba2f00faa25fe0b356ce8b4dcb44be61d/lib/game/entities/darkelf.js" data-method="post" rel="nofollow" data-hotkey="e"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/stefanbehr/Devknull/raw/master/lib/game/entities/darkelf.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/stefanbehr/Devknull/blame/master/lib/game/entities/darkelf.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/stefanbehr/Devknull/commits/master/lib/game/entities/darkelf.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">ig</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span></div><div class='line' id='LC2'>	<span class="s1">&#39;game.entities.darkelf&#39;</span></div><div class='line' id='LC3'><span class="p">)</span></div><div class='line' id='LC4'><span class="p">.</span><span class="nx">requires</span><span class="p">(</span></div><div class='line' id='LC5'>	<span class="s1">&#39;impact.entity&#39;</span></div><div class='line' id='LC6'><span class="p">)</span></div><div class='line' id='LC7'><span class="p">.</span><span class="nx">defines</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC8'>	<span class="nx">EntityDarkelf</span> <span class="o">=</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC9'>		<span class="nx">animSheet</span><span class="o">:</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">AnimationSheet</span><span class="p">(</span><span class="s1">&#39;media/dark_elf.png&#39;</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">48</span><span class="p">),</span></div><div class='line' id='LC10'>		<span class="nx">size</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">20</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">34</span><span class="p">},</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">offset</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">8</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">14</span><span class="p">},</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;darkelf&#39;</span><span class="p">,</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">zIndex</span><span class="o">:</span> <span class="o">-</span><span class="mi">7</span><span class="p">,</span></div><div class='line' id='LC14'>		<span class="nx">direction</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC15'>		<span class="nx">directions</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC16'>						<span class="p">{</span><span class="nx">mx</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">my</span><span class="o">:-</span><span class="mi">1</span><span class="p">},</span></div><div class='line' id='LC17'>						<span class="p">{</span><span class="nx">mx</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span> <span class="nx">my</span><span class="o">:</span><span class="mi">0</span><span class="p">},</span></div><div class='line' id='LC18'>						<span class="p">{</span><span class="nx">mx</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">my</span><span class="o">:</span><span class="mi">1</span><span class="p">},</span></div><div class='line' id='LC19'>						<span class="p">{</span><span class="nx">mx</span><span class="o">:-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">my</span><span class="o">:</span><span class="mi">0</span><span class="p">}</span></div><div class='line' id='LC20'>					<span class="p">],</span></div><div class='line' id='LC21'>		<span class="nx">maxVel</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC22'>		<span class="nx">vel</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">0</span><span class="p">},</span></div><div class='line' id='LC23'>		<span class="nx">friction</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">100</span><span class="p">},</span></div><div class='line' id='LC24'>		<span class="nx">velGround</span><span class="o">:</span> <span class="mi">50</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">health</span><span class="o">:</span> <span class="mi">30</span><span class="p">,</span> <span class="c1">// Check for health == 0</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doesDamage</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="nx">weapons</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;sword&#39;</span><span class="p">,</span> <span class="s1">&#39;spell&#39;</span><span class="p">],</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">activeWeapon</span><span class="o">:</span> <span class="s1">&#39;sword&#39;</span><span class="p">,</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attackRadius</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stopRadius</span><span class="o">:</span> <span class="mi">75</span><span class="p">,</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">followRadius</span><span class="o">:</span> <span class="mi">200</span><span class="p">,</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">following</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">detourDuration</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">randomTurnProb</span><span class="o">:</span> <span class="mf">0.001</span><span class="p">,</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">detourTimer</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stopped</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">detouring</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC38'>		<span class="nx">attacking</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attackLapse</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC40'>		<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC42'>			<span class="k">this</span><span class="p">.</span><span class="nx">weapon</span> <span class="o">=</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">game</span><span class="p">.</span><span class="nx">spawnEntity</span><span class="p">(</span><span class="s1">&#39;EntityElfWeapon&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="p">{</span><span class="nx">owner</span><span class="o">:</span><span class="k">this</span><span class="p">});</span></div><div class='line' id='LC43'>			<span class="c1">// Add animations</span></div><div class='line' id='LC44'>			<span class="k">this</span><span class="p">.</span><span class="nx">setupAnimation</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC45'>		<span class="p">},</span></div><div class='line' id='LC46'>		<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC47'>			<span class="c1">// switch weapons, manual for now</span></div><div class='line' id='LC48'>			<span class="k">if</span> <span class="p">(</span><span class="nx">ig</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">pressed</span><span class="p">(</span><span class="s1">&#39;switch&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">this</span><span class="p">.</span><span class="nx">weapon</span><span class="p">.</span><span class="nx">kill</span><span class="p">();</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">activeWeapon</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">activeWeapon</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">weapons</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">?</span> </div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">this</span><span class="p">.</span><span class="nx">weapons</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">weapons</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC52'>	            <span class="k">this</span><span class="p">.</span><span class="nx">weapon</span> <span class="o">=</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">game</span><span class="p">.</span><span class="nx">spawnEntity</span><span class="p">(</span><span class="s1">&#39;EntityElfWeapon&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="p">{</span><span class="nx">owner</span><span class="o">:</span> <span class="k">this</span><span class="p">});</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="kd">var</span> <span class="nx">oldDirection</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">;</span></div><div class='line' id='LC57'>			<span class="c1">// AI code</span></div><div class='line' id='LC58'>			<span class="kd">var</span> <span class="nx">player</span> <span class="o">=</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">game</span><span class="p">.</span><span class="nx">getEntitiesByType</span><span class="p">(</span><span class="nx">EntityPlayer</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC59'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">detouring</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">detourTimer</span><span class="p">.</span><span class="nx">delta</span><span class="p">()</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">detourDuration</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC60'>				<span class="k">this</span><span class="p">.</span><span class="nx">detouring</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC61'>			<span class="p">}</span></div><div class='line' id='LC62'>			<span class="k">this</span><span class="p">.</span><span class="nx">tryFollowingPlayer</span><span class="p">(</span><span class="nx">player</span><span class="p">);</span></div><div class='line' id='LC63'>			<span class="c1">// random wandering if not following or detouring</span></div><div class='line' id='LC64'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">following</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">detouring</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">stopped</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>				<span class="kd">var</span> <span class="nx">velocity</span> <span class="o">=</span> <span class="mf">0.25</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">;</span></div><div class='line' id='LC66'>				<span class="kd">var</span> <span class="nx">rand</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span></div><div class='line' id='LC67'>				<span class="k">if</span> <span class="p">(</span><span class="nx">rand</span> <span class="o">&gt;</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">randomTurnProb</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC68'>					<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">%</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC69'>				<span class="p">}</span></div><div class='line' id='LC70'>				<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>					<span class="k">case</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC72'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC73'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="o">-</span><span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC74'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC75'>					<span class="k">case</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC76'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC77'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC78'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC79'>					<span class="k">case</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC80'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC81'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC82'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC83'>					<span class="k">case</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC84'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="o">-</span><span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC85'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC86'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC87'>				<span class="p">}</span></div><div class='line' id='LC88'>			<span class="p">}</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>			<span class="k">if</span> <span class="p">(</span><span class="nx">oldDirection</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>				<span class="k">this</span><span class="p">.</span><span class="nx">setupAnimation</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC92'>			<span class="p">}</span></div><div class='line' id='LC93'>			<span class="c1">// change animation between idle/running according to velocity</span></div><div class='line' id='LC94'>			<span class="k">if</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="p">(</span><span class="mf">0.25</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">))</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="p">(</span><span class="mf">0.25</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="k">this</span><span class="p">.</span><span class="nx">currentAnim</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">anims</span><span class="p">.</span><span class="nx">run</span><span class="p">;</span></div><div class='line' id='LC96'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC97'>				<span class="k">this</span><span class="p">.</span><span class="nx">currentAnim</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">anims</span><span class="p">.</span><span class="nx">walk</span><span class="p">;</span></div><div class='line' id='LC98'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC99'>				<span class="k">this</span><span class="p">.</span><span class="nx">currentAnim</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">anims</span><span class="p">.</span><span class="nx">idle</span><span class="p">;</span></div><div class='line' id='LC100'>			<span class="p">}</span></div><div class='line' id='LC101'>			<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC102'>		<span class="p">},</span></div><div class='line' id='LC103'>		<span class="nx">tryFollowingPlayer</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">player</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'>			<span class="c1">// check for player alive</span></div><div class='line' id='LC105'>			<span class="k">if</span> <span class="p">(</span><span class="nx">player</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>				<span class="kd">var</span> <span class="nx">px</span><span class="p">,</span> <span class="nx">py</span><span class="p">;</span></div><div class='line' id='LC107'>				<span class="nx">px</span> <span class="o">=</span> <span class="nx">player</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC108'>				<span class="nx">py</span> <span class="o">=</span> <span class="nx">player</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>				<span class="kd">var</span> <span class="nx">enemyDist</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">euclidDist</span><span class="p">(</span><span class="nx">px</span><span class="p">,</span> <span class="nx">py</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>				<span class="k">if</span> <span class="p">((</span><span class="nx">enemyDist</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">followRadius</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">enemyDist</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">stopRadius</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC113'>					<span class="k">this</span><span class="p">.</span><span class="nx">following</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC114'>					<span class="k">this</span><span class="p">.</span><span class="nx">stopped</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>					<span class="kd">var</span> <span class="nx">absxdist</span><span class="p">,</span> <span class="nx">absydist</span><span class="p">;</span></div><div class='line' id='LC117'>					<span class="nx">absxdist</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">px</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">);</span></div><div class='line' id='LC118'>					<span class="nx">absydist</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">py</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>					<span class="kd">var</span> <span class="nx">above</span><span class="p">,</span> <span class="nx">left</span><span class="p">;</span></div><div class='line' id='LC121'>					<span class="nx">above</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="nx">py</span><span class="p">);</span></div><div class='line' id='LC122'>					<span class="nx">left</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span> <span class="o">&lt;</span> <span class="nx">px</span><span class="p">);</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>					<span class="kd">var</span> <span class="nx">xaligned</span><span class="p">,</span> <span class="nx">yaligned</span><span class="p">;</span></div><div class='line' id='LC125'>					<span class="nx">xaligned</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span> <span class="o">==</span> <span class="nx">px</span><span class="p">);</span></div><div class='line' id='LC126'>					<span class="nx">yaligned</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">==</span> <span class="nx">py</span><span class="p">);</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>					<span class="c1">// follow player</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>					<span class="c1">// go in direction of greatest gap</span></div><div class='line' id='LC131'>					<span class="k">if</span> <span class="p">(((</span><span class="nx">absxdist</span> <span class="o">&gt;</span> <span class="nx">absydist</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">detouring</span><span class="p">)</span> <span class="o">||</span> <span class="p">((</span><span class="nx">absxdist</span> <span class="o">&lt;</span> <span class="nx">absydist</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">detouring</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC132'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC133'>						<span class="c1">// move toward player on x axis only</span></div><div class='line' id='LC134'>						<span class="k">if</span> <span class="p">(</span><span class="nx">left</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>							<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC136'>							<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">;</span></div><div class='line' id='LC137'>						<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">xaligned</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>							<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC139'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC140'>							<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC141'>							<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">;</span></div><div class='line' id='LC142'>						<span class="p">}</span></div><div class='line' id='LC143'>					<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(((</span><span class="nx">absxdist</span> <span class="o">&gt;</span> <span class="nx">absydist</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">detouring</span><span class="p">)</span> <span class="o">||</span> <span class="p">((</span><span class="nx">absxdist</span> <span class="o">&lt;</span> <span class="nx">absydist</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">detouring</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC144'>						<span class="c1">// move toward player on y axis only</span></div><div class='line' id='LC145'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC146'>						<span class="k">if</span> <span class="p">(</span><span class="nx">above</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>							<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC148'>							<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">;</span></div><div class='line' id='LC149'>						<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">yaligned</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC150'>							<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC151'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC152'>							<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC153'>							<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">;</span></div><div class='line' id='LC154'>						<span class="p">}</span></div><div class='line' id='LC155'>					<span class="p">}</span></div><div class='line' id='LC156'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC157'>					<span class="k">if</span> <span class="p">(</span><span class="nx">enemyDist</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">stopRadius</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>						<span class="k">this</span><span class="p">.</span><span class="nx">stopped</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC159'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC160'>						<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC161'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC162'>						<span class="k">this</span><span class="p">.</span><span class="nx">stopped</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC163'>					<span class="p">}</span></div><div class='line' id='LC164'>					<span class="k">this</span><span class="p">.</span><span class="nx">following</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC165'>				<span class="p">}</span>				</div><div class='line' id='LC166'>			<span class="p">}</span></div><div class='line' id='LC167'>		<span class="p">},</span></div><div class='line' id='LC168'>		<span class="nx">kill</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC169'>			<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC170'>			<span class="k">this</span><span class="p">.</span><span class="nx">weapon</span><span class="p">.</span><span class="nx">kill</span><span class="p">();</span></div><div class='line' id='LC171'>		<span class="p">},</span></div><div class='line' id='LC172'>		<span class="nx">setupAnimation</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">offset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>			<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="p">(</span><span class="nx">offset</span> <span class="o">==</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC174'>			<span class="c1">// scale by 3 (states of walking), shift by 1 (standing still is in middle)</span></div><div class='line' id='LC175'>			<span class="nx">offset</span> <span class="o">=</span> <span class="nx">offset</span> <span class="o">*</span> <span class="mi">3</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC176'>			<span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;idle&#39;</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="p">[</span><span class="nx">offset</span><span class="p">]);</span></div><div class='line' id='LC177'>			<span class="kd">var</span> <span class="nx">runseq</span> <span class="o">=</span> <span class="p">[</span><span class="nx">offset</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">offset</span><span class="p">,</span> <span class="nx">offset</span><span class="o">+</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC178'>			<span class="k">if</span> <span class="p">(</span><span class="nx">left</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>				<span class="nx">runseq</span> <span class="o">=</span> <span class="nx">runseq</span><span class="p">.</span><span class="nx">reverse</span><span class="p">();</span></div><div class='line' id='LC180'>			<span class="p">}</span></div><div class='line' id='LC181'>			<span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;walk&#39;</span><span class="p">,</span> <span class="mf">0.14</span><span class="p">,</span> <span class="nx">runseq</span><span class="p">);</span></div><div class='line' id='LC182'>			<span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;run&#39;</span><span class="p">,</span> <span class="mf">0.07</span><span class="p">,</span> <span class="nx">runseq</span><span class="p">);</span></div><div class='line' id='LC183'>		<span class="p">},</span></div><div class='line' id='LC184'>		<span class="nx">check</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'>			    <span class="nx">other</span><span class="p">.</span><span class="nx">receiveDamage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">doesDamage</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC187'>			    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">health</span><span class="p">);</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">lastAttack</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Timer</span><span class="p">();</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">lastAttack</span><span class="p">.</span><span class="nx">delta</span><span class="p">()</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attackLapse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC193'>		<span class="p">},</span></div><div class='line' id='LC194'>		<span class="nx">handleMovementTrace</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC195'>			<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></div><div class='line' id='LC196'>			<span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">collision</span><span class="p">.</span><span class="nx">x</span> <span class="o">||</span> <span class="nx">res</span><span class="p">.</span><span class="nx">collision</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>				<span class="kd">var</span> <span class="nx">velocity</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">velGround</span><span class="p">;</span></div><div class='line' id='LC198'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">following</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC199'>					<span class="c1">// start timing detour</span></div><div class='line' id='LC200'>					<span class="k">this</span><span class="p">.</span><span class="nx">detourTimer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Timer</span><span class="p">();</span></div><div class='line' id='LC201'>					<span class="k">this</span><span class="p">.</span><span class="nx">detouring</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC202'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC203'>					<span class="c1">// turn around 180 degrees</span></div><div class='line' id='LC204'>					<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">+</span> <span class="mi">2</span><span class="p">)</span> <span class="o">%</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC205'>					<span class="k">this</span><span class="p">.</span><span class="nx">setupAnimation</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC206'>				<span class="p">}</span></div><div class='line' id='LC207'>			<span class="p">}</span></div><div class='line' id='LC208'>		<span class="p">},</span></div><div class='line' id='LC209'>		<span class="c1">// collision stuff</span></div><div class='line' id='LC210'>		<span class="nx">type</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">B</span><span class="p">,</span></div><div class='line' id='LC211'>		<span class="nx">checkAgainst</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">A</span><span class="p">,</span></div><div class='line' id='LC212'>		<span class="nx">collides</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">COLLIDES</span><span class="p">.</span><span class="nx">PASSIVE</span><span class="p">,</span></div><div class='line' id='LC213'>		<span class="c1">// helper method finding euclidean distance between two points</span></div><div class='line' id='LC214'>		<span class="nx">euclidDist</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x1</span><span class="p">,</span> <span class="nx">y1</span><span class="p">,</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">y2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC215'>			<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">x1</span><span class="o">-</span><span class="nx">x2</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">y1</span><span class="o">-</span><span class="nx">y2</span><span class="p">,</span> <span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC216'>		<span class="p">},</span></div><div class='line' id='LC217'>	<span class="p">});</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">EntitySpell</span> <span class="o">=</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC220'>		<span class="nx">size</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">32</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">32</span><span class="p">},</span></div><div class='line' id='LC221'>		<span class="nx">animSheet</span><span class="o">:</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">AnimationSheet</span><span class="p">(</span><span class="s1">&#39;media/spell.png&#39;</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">32</span><span class="p">),</span></div><div class='line' id='LC222'>		<span class="nx">maxVel</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">400</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">400</span><span class="p">},</span></div><div class='line' id='LC223'>		<span class="nx">type</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">,</span></div><div class='line' id='LC224'>		<span class="nx">checkAgainst</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">A</span><span class="p">,</span></div><div class='line' id='LC225'>		<span class="nx">collides</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">COLLIDES</span><span class="p">.</span><span class="nx">PASSIVE</span><span class="p">,</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">zIndex</span><span class="o">:</span> <span class="o">-</span><span class="mi">12</span><span class="p">,</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lifetime</span><span class="o">:</span> <span class="mf">0.3</span><span class="p">,</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ticks</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doesDamage</span><span class="o">:</span> <span class="mi">10</span><span class="p">,</span></div><div class='line' id='LC230'>		<span class="nx">vel</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">0</span><span class="p">},</span></div><div class='line' id='LC231'>		<span class="nx">owner</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC232'>		<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>			<span class="k">this</span><span class="p">.</span><span class="nx">owner</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">owner</span><span class="p">;</span></div><div class='line' id='LC234'>			<span class="c1">// calculate some spawn offsets depending on baddie orientation</span></div><div class='line' id='LC235'>			<span class="kd">var</span> <span class="nx">xadjust</span> <span class="o">=</span> <span class="nx">yadjust</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">velocity</span> <span class="o">=</span> <span class="mi">400</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">direction</span><span class="p">;</span></div><div class='line' id='LC238'>			<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC239'>				<span class="k">case</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="o">-</span><span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC241'>					<span class="nx">yadjust</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC242'>					<span class="nx">xadjust</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC243'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC244'>				<span class="k">case</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC246'>					<span class="nx">xadjust</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC247'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC248'>				<span class="k">case</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC250'>					<span class="nx">yadjust</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC251'>					<span class="nx">xadjust</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">x</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC252'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC253'>				<span class="k">case</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span><span class="o">:</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="o">-</span><span class="nx">velocity</span><span class="p">;</span></div><div class='line' id='LC255'>					<span class="nx">xadjust</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC256'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC257'>			<span class="p">}</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">x</span><span class="o">+</span><span class="nx">xadjust</span><span class="p">,</span> <span class="nx">y</span><span class="o">+</span><span class="nx">yadjust</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;idle&#39;</span><span class="p">,</span> <span class="mf">0.03</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">1</span><span class="p">]);</span> <span class="c1">// pulsate</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">timeExist</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Timer</span><span class="p">();</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">lifetime</span> <span class="o">=</span> <span class="mf">0.3</span><span class="p">;</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC263'>		<span class="nx">handleMovementTrace</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>			<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></div><div class='line' id='LC265'>			<span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">collision</span><span class="p">.</span><span class="nx">x</span> <span class="o">||</span> <span class="nx">res</span><span class="p">.</span><span class="nx">collision</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC266'>				<span class="k">this</span><span class="p">.</span><span class="nx">kill</span><span class="p">();</span></div><div class='line' id='LC267'>			<span class="p">}</span></div><div class='line' id='LC268'>		<span class="p">},</span></div><div class='line' id='LC269'>		<span class="nx">check</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">A</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC271'>			    <span class="nx">other</span><span class="p">.</span><span class="nx">receiveDamage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">doesDamage</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC273'>			<span class="k">this</span><span class="p">.</span><span class="nx">kill</span><span class="p">();</span></div><div class='line' id='LC274'>		<span class="p">},</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timeExist</span><span class="p">.</span><span class="nx">delta</span><span class="p">()</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">lifetime</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">kill</span><span class="p">();</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC281'>	<span class="p">});</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">EntityElfWeapon</span> <span class="o">=</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">32</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">32</span><span class="p">},</span> <span class="c1">//TODO ANIMATE WEAPON</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">animSheet</span><span class="o">:</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">AnimationSheet</span><span class="p">(</span><span class="s1">&#39;media/weapons1.png&#39;</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">32</span><span class="p">),</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxVel</span><span class="o">:</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">150</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">150</span><span class="p">},</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">,</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">checkAgainst</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">A</span><span class="p">,</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collides</span><span class="o">:</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">COLLIDES</span><span class="p">.</span><span class="nx">PASSIVE</span><span class="p">,</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">weaponType</span><span class="o">:</span> <span class="s1">&#39;sword&#39;</span><span class="p">,</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasHit</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attackDuration</span><span class="o">:</span> <span class="mf">0.25</span><span class="p">,</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attackTimer</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attacking</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">direction</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">zIndex</span><span class="o">:</span> <span class="o">-</span><span class="mi">11</span><span class="p">,</span></div><div class='line' id='LC297'>		<span class="nx">weaponDisplacements</span><span class="o">:</span> <span class="p">{</span><span class="s1">&#39;sword&#39;</span><span class="o">:</span> <span class="p">[{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">7</span><span class="p">},</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;								<span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">7</span><span class="p">},</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;								<span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="o">-</span><span class="mi">16</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">7</span><span class="p">},</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;								<span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="o">-</span><span class="mi">18</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">7</span><span class="p">}]</span></div><div class='line' id='LC301'>		<span class="p">},</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">owner</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">owner</span><span class="p">;</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">weaponDisplace</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span><span class="p">);</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setupAnimation</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handleMovementTrace</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If collision, stop player</span></div><div class='line' id='LC310'>			<span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">collision</span><span class="p">.</span><span class="nx">x</span> <span class="o">||</span> <span class="nx">res</span><span class="p">.</span><span class="nx">collision</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">vel</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">check</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Causes damage once every sword cycle.</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attacking</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">&amp;&amp;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Entity</span><span class="p">.</span><span class="nx">TYPE</span><span class="p">.</span><span class="nx">A</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span> <span class="o">==</span> <span class="s1">&#39;sword&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">other</span><span class="p">.</span><span class="nx">receiveDamage</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">activeWeapon</span><span class="p">;</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">checkAttack</span><span class="p">();</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setupAnimation</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span> <span class="o">==</span> <span class="s1">&#39;sword&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">attacking</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentAnim</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">anims</span><span class="p">.</span><span class="nx">swing</span><span class="p">;</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span> <span class="o">==</span> <span class="s1">&#39;sword&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentAnim</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">anims</span><span class="p">.</span><span class="nx">idle</span><span class="p">;</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">this</span><span class="p">.</span><span class="nx">currentAnim</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">anims</span><span class="p">.</span><span class="nx">spell</span><span class="p">;</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">weaponDisplace</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span><span class="p">);</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC337'>		<span class="nx">setupAnimation</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dir</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC338'>			<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dir</span> <span class="o">==</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If going up, put weapon behind user</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">zIndex</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dir</span> <span class="o">%</span> <span class="mi">3</span><span class="p">)</span> <span class="o">?</span> <span class="o">-</span><span class="mi">6</span> <span class="o">:</span> <span class="o">-</span><span class="mi">8</span><span class="p">;</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ig</span><span class="p">.</span><span class="nx">game</span><span class="p">.</span><span class="nx">sortEntitiesDeferred</span><span class="p">();</span> <span class="c1">// Registers new zIndex.</span></div><div class='line' id='LC342'>			<span class="nx">offset</span> <span class="o">=</span> <span class="nx">dir</span> <span class="o">*</span> <span class="mi">3</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">left</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;idle&#39;</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="p">[</span><span class="nx">offset</span><span class="o">+</span><span class="mi">1</span><span class="p">])</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;idle&#39;</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="p">[</span><span class="nx">offset</span><span class="o">-</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">swingseq</span> <span class="o">=</span> <span class="p">[</span><span class="nx">offset</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;				<span class="nx">offset</span><span class="p">,</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;				<span class="nx">offset</span><span class="o">+</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">left</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="nx">swingseq</span> <span class="o">=</span> <span class="nx">swingseq</span><span class="p">.</span><span class="nx">reverse</span><span class="p">();</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">swingseq</span> <span class="o">=</span> <span class="nx">swingseq</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">swingseq</span><span class="p">.</span><span class="nx">reverse</span><span class="p">());</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;spell&#39;</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addAnim</span><span class="p">(</span><span class="s1">&#39;swing&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">attackDuration</span><span class="p">,</span> <span class="nx">swingseq</span><span class="p">);</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">checkAttack</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span> <span class="o">==</span> <span class="s1">&#39;sword&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ig</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">pressed</span><span class="p">(</span><span class="s1">&#39;attack&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">attacking</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attacking</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attackTimer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">Timer</span><span class="p">();</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attacking</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attackTimer</span><span class="p">.</span><span class="nx">delta</span><span class="p">()</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attackDuration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attacking</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attackTimer</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">weaponType</span> <span class="o">==</span> <span class="s1">&#39;spell&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">ig</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">pressed</span><span class="p">(</span><span class="s1">&#39;attack&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attacking</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attackTimer</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hasHit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ig</span><span class="p">.</span><span class="nx">game</span><span class="p">.</span><span class="nx">spawnEntity</span><span class="p">(</span><span class="s1">&#39;EntitySpell&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="p">{</span><span class="nx">dir</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">owner</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">});</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="nx">weaponDisplace</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">weapon</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="c1">// get array of x, y displacement dicts indexed by direction</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">if</span> <span class="p">(</span><span class="nx">weapon</span> <span class="o">==</span> <span class="s2">&quot;sword&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC378'>				<span class="kd">var</span> <span class="nx">displacements</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">weaponDisplacements</span><span class="p">[</span><span class="nx">weapon</span><span class="p">];</span></div><div class='line' id='LC379'>				<span class="kd">var</span> <span class="nx">dir</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">owner</span><span class="p">.</span><span class="nx">direction</span><span class="p">;</span></div><div class='line' id='LC380'>				<span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span> <span class="o">+=</span> <span class="nx">displacements</span><span class="p">[</span><span class="nx">dir</span><span class="p">].</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC381'>				<span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">+=</span> <span class="nx">displacements</span><span class="p">[</span><span class="nx">dir</span><span class="p">].</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC382'>			<span class="p">}</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC385'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/stefanbehr/Devknull/tree-list/130f668ba2f00faa25fe0b356ce8b4dcb44be61d" data-blob-url-prefix="/stefanbehr/Devknull/blob/130f668ba2f00faa25fe0b356ce8b4dcb44be61d">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872007" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.33358s from fe11.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521039" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="mini-icon exclamation"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1315928456" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1315928456" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.33701' data-host='fe11'></span>
  </body>
</html>

