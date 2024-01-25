class ForumThread < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags

  include PgSearch::Model

  pg_search_scope :search_by_title_and_content, against: [:title, :content], using: { tsearch: { any_word: true } }

end
