class CreateForumThreadsTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_table :forum_threads_tags, id: false do |t|
      t.references :forum_thread, foreign_key: true
      t.references :tag, foreign_key: true
    end
  end
end
