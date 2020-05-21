class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :theme
end
