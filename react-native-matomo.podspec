require 'json'
package_json = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name           = "react-native-matomo"
  s.version        = package_json["version"]
  s.summary        = package_json["description"]
  s.homepage       = "https://github.com/BonifyByForteil/react-native-matomo"
  s.license        = package_json["license"]
  s.author         = { package_json["author"] => package_json["author"] }
  s.platform       = :ios, "9.0"
  s.source         = { :git => "#{package_json["repository"]["url"]}", :tag => "#{s.version}" }
  s.source_files   = 'ios/MatTracker/*.{h,m,swift}'
  s.dependency 'React'


  s.subspec "BNFMatomo" do |ss|
      ss.source_files = "ios/BNFMatotmo/**/*.{h,m}"
  end

end